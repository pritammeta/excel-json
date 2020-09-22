let selectedFile;
// console.log(window.XLSX);
document.getElementById('input').addEventListener("change", (event) => {
    selectedFile = event.target.files[0];
})

let data=[{
    "name":"jhkjha ",
    "data":"scd",
    "abc":"sdef"
}]


document.getElementById('button').addEventListener("click", () => {
    XLSX.utils.json_to_sheet(data, 'out.xlsx');
    if(selectedFile){
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event)=>{
         let data = event.target.result;
         let workbook = XLSX.read(data,{type:"binary"});
        //  console.log(workbook);
         workbook.SheetNames.forEach(sheet => {
              let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
           // console.log(rowObject);
            // document.getElementById("jsondata").innerHTML = JSON.stringify(rowObject, undefined, 4)
             let s = rowObject.length;
            
             for (i = 0; i < s; i++) {
                 x = rowObject[i].Column_A;
                 v = rowObject[i].Column_B;

                 console.log(v);
                 
                 var para = document.createElement("h6");
                 var node = document.createTextNode("<dlentry><dt>" + x + "</dt>"+"\n\n\n"+"<dd>"+v+"</dd></dlentry>");
                 para.appendChild(node);
                 var element = document.getElementById("div1");
                 element.appendChild(para);
            }

          });
        }
    }
});