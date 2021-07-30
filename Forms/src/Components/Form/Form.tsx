import React from 'react';


const Form = (): JSX.Element => {

  return (
    <form action="" method="post">
      <input type="text" />
      <input type="date" />
      <select name="priority" id="priority">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="urgent">Urgent</option>
      </select>
      <input type="checkbox" name="" id="" />
      <p>Switcher</p>
    </form>

  )
}
