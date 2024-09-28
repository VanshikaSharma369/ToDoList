function addTask()
{
  document.getElementById("side").style.width = "300px";
  document.getElementById("content").style.marginRight = "300px";
  function add(){
    const newItem = document.getElementById("Add").value;
    if(newItem === "")
    {
      setAlertMessage("PLease enter anything to add");
    }
  }
  
   
}
function closeNav()
{
  document.getElementById("side").style.width = "0";
  document.getElementById("showTask").style.width = "0";
  document.getElementById("content").style.marginRight = "0";
}
function showTasks()
{
  document.getElementById("showTask").style.width = "300px";
  document.getElementById("content").style.marginRight = "300px";
}