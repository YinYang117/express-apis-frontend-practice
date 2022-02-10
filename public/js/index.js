// const express = require("express");
console.log("Hello from index.js!");


document.addEventListener("DOMContentLoaded", async () => {
  document.querySelector("#tweets-container")
  const tweetsHtml = [  ]
                  //stringified HTML blocks
  try {
    const res = await fetch("http://localhost:8080/tweets");
    if (res.status == 401) return res.redirected("/log-in")
    const { tweets } = await res.json();
  } catch (e) { console.error(e) };

});