function setNewDate(date1, date2){
//date1, date2 should be in format "DD/MM/YYYY"
//date1 should be earlier than date2
  document.getElementById('filterStartDate').value=date1;
  document.getElementById('filterEndDate').value=date2;
  document.getElementsByName('timeSheet_worker_list_search')[0].click()
}
