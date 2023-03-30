fetch("https://jsonplaceholder.typicode.com/users")

.then((data)=>{  // data in json format

    return data.json();  //converted to object
   
})
.then((objectData)=>{  //consits of api data which is converted to object

    console.log(objectData[0].id);

    let tableData = " ";

    objectData.map((values)=>{   //this values contains entire data present inside the API.
                                            //USING THIS VALUE CAN ACESS individual data.
        tableData += ` <tr>     
       
        <td>${values.id}</td>
        <td>${values.name}</td>
        <td>${values.username}</td>
        <td>${values.email}</td>
        
        </tr>`
      

    });
    
   document.getElementById("table_body").innerHTML = tableData;
})