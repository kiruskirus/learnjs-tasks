function getDateAgo(date, days) {

  return new Date(date - days * 24 * 3600 * 1000);
  
}
