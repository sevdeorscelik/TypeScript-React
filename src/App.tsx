import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { IPerson, PersonStatus } from "./data/interface";

let lastName: string;
let age: number;

lastName = "sevde";
age = 27;

//simdi bunu ayri bi rcomponente tasiyalim
/*
interface IPerson {
  firstName: string;
  lastName: string;
  age: number;
  isMember: boolean;
  scores: number[];  //bir numara yazamayiz. arrayin icinde olmali
  acceddGroups: string[];
}
*/

const person: IPerson = {
  firstName: "Sevde",
  lastName: "Örscelik",
  age: 27,
  isMember: true,
  scores: [50, 70, 12],
  acceddGroups: ["admins", "backupAdmins"],
  status: PersonStatus.Employee,
  // middleName: 'nnn' interface'te tanimlanmadigi icin kullanamadik
};

const url = "https://gutendex.com/books/?search=paris";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      setBooks((await axios.get(url)).data.results);
    })();
  }, []);

  //console.log(books);

  return (
    <div className="App">
      <div>
        {person.status === PersonStatus.Employee && (
          <>
            The employee {person.firstName} {person.lastName} is {person.age}{" "}
            years old. <br />
            Their scores are: {person.scores.join(", ")} and
            <br />
            his status is: {PersonStatus[person.status]}
          </>
        )}
      </div>
      <hr />
      <div>
        <p>There are {books.length} books.</p>
        <ul>
          {books.map((book, index) => {
            return (
              <li key={index}>
                {book.title} by{" "}
                {book.authors.length === 0 ? "(unknown)" : book.authors[0].name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
