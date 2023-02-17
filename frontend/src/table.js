import React, { useState } from 'react'
import { useEffect } from "react";
import axios from "axios";

export default function Table() {
    const [data, setData] = useState({brand:"",transactionType:"",totalOrders:0,totalOrderValue:0,date:""});
    console.log("hdsjfhsjdfhsdj")
    function submitData() {
        var qs = require("qs");
        var data = qs.stringify({
          data,
        });
        var config = {
          method: "post",
          url: `/healthcare/listprofile`,
          headers: {
          },
          data: data,
        };
        axios(config)
          .then(function (response) {
           getData()
          })
          .catch(function (error) {
            console.log("Error", error.response);
          });
      }
      function getData(){
        var configListReg = {
            method: "get",
            url: `/healthcare/listregisterdata`,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          };
      
          axios(configListReg)
            .then(function (response) {
              console.log(response.data)
            })
            .catch(function (error) {
              console.log("Error", error.response);
            });
      }
      useEffect(()=>{ getData()},[])
  return (
    <div><table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">brand</th>
        <th scope="col">transactionType</th>
        <th scope="col">totalOrders</th>
        <th scope="col">totalOrderValue</th>
        <th scope="col">Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td><input type="text" class="form-control" placeholder='brand' required onChange={(e)=>setData.brand(e.target.value)}/></td>
        <td><input type="text"class="form-control" placeholder='transactionType' required onChange={(e)=>setData.transactionType(e.target.value)}/></td>
        <td><input type= "number" class="form-control" placeholder='totalOrders' required onChange={(e)=>setData.totalOrders(e.target.value)} /></td>
        <td><input type="number" class="form-control" placeholder='totalOrderValue' required onChange={(e)=>setData.totalOrderValue(e.target.value)}/></td>
        <td><input type="date" class="form-control" placeholder='Date' required onChange={(e)=>setData.date(e.target.value)}/></td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>@fat</td>
        <td>@fat</td>
      </tr>
      </tbody>
</table>
{""}
<button type="button" class="btn btn-primary" onClick={(e)=>submitData()}>submit Data</button>
</div>
  )
}
