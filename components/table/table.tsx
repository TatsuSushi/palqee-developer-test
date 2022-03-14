import React, { FC } from "react";
import styles from "./table.module.css";
import Link from "next/link";

interface tableProps {
  //Title props
  title: String;
  title2: String;
  title3: String;
  title4: String;
  title5: String;
  title6: String;

  //Attribute props
  characterLink: String;
  name: String;
  hairColor: String;
  skinColor: String;
  eyeColor: String;
  gender: String;
  homeWorld: String;
}

const sortTable = (n: number) => {
  let table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
    no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
        first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
            one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
            based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
};
const table: FC<tableProps> = (props) => {
  return (
    <table className={styles.table} id={"myTable"}>
      <thead>
        <tr className={styles.tr}>
          <th className={styles.th} onClick={() => sortTable(0)}>
            {props.title}
          </th>
          <th className={styles.th} onClick={() => sortTable(1)}>
            {props.title2}
          </th>
          <th className={styles.th} onClick={() => sortTable(2)}>
            {props.title3}
          </th>
          <th className={styles.th} onClick={() => sortTable(3)}>
            {props.title4}
          </th>
          <th className={styles.th} onClick={() => sortTable(4)}>
            {props.title5}
          </th>
          <th className={styles.th} onClick={() => sortTable(5)}>
            {props.title6}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Link href={props.characterLink}>
            <td className={styles.td}>
              <a>{props.name}</a>
            </td>
          </Link>
          <td className={styles.td}>{props.hairColor}</td>
          <td className={styles.td}>{props.skinColor}</td>
          <td className={styles.td}>{props.eyeColor}</td>
          <td className={styles.td}>{props.gender}</td>
          <td className={styles.td}>{props.homeWorld}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default table;