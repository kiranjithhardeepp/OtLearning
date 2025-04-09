// Question 1
let arr = ["apple", "banana", "cherry","grapes"];
let upperCaseConverted=arr.map((data)=>{
    return data.toUpperCase();
})
console.log('upperCaseConverted: ', upperCaseConverted);

// Question 2
const fruits = ["apple", "kiwi", "banana", "fig", "grapes"];
const result = fruits.filter(fruit => fruit.length > 4);
console.log(result);

// Question 3
const num = [10, 5, 100, 3, 50];
let sum = num.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

//Question 4
function fetchPost() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Data:", data);
      })
      .catch(error => {
        console.error("Error fetching data:", error.message);
      });
  }
fetchPost();


  async function fetchPostAsync() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
fetchPostAsync(); 

  
