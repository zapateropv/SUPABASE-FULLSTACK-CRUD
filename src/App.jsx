import { supabase } from "./supabase"
import { useState, useEffect } from "react"
import Record from "./Record";
import AddRecord from "./AddRecord";

function App() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [toggle, setToggle] = useState(false)
  const [db_id, setId] = useState("")



  useEffect(() => {
    fetchDb()
  })

  //FETCHING FROM DB
  const fetchDb = async () => {
    const { data } = await supabase
      .from('users')
      .select('*')

    setUsers(data);

  }

  //ADDING RECORDS
  const insertDB = async () => {
    const { data, error } = await supabase
      .from('users')
      .insert({ full_name: name, age, email })
      .select('*')
  }

  const submitRecord = (e) => {
    e.preventDefault()

    insertDB()

    if (name == "" || age == "" || email == "") {
      alert("form is empty")
    }
   clearForm()
  }


//DELETING A RECORD
  const deleteDB = async (recordID) => {
    const { data } = await supabase
      .from('users')
      .delete()
      .eq('id', recordID)
  }

  const editRecord =  (recordId, fullName, age, email) => {

   const user = users.find((u) => u.id == recordId)

   if(user)
   {
    setToggle(true);         
    setName(fullName);
    setAge(age);
    setEmail(email);
    setId(recordId); 
   }


  }

//FOR EDITING RECORDS
  const updateDB = async (e) => {
    e.preventDefault()

    const { data,error } = await supabase
      .from('users')
      .update({ full_name: name, age, email })
      .eq("id", db_id)


      if(error) console.log(error)

      clearForm()
      setToggle(false)
      fetchDb()
  }

  const clearForm = () => {
    setName("")
    setAge("")
    setEmail("")
  }

  return (
    <>
      <AddRecord name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        email={email}
        setEmail={setEmail}
        submitRecord={submitRecord}
        toggle={toggle}
        updateDB={updateDB}
      />
      <Record users={users}
        deleteDB={deleteDB}
        editRecord={editRecord} />
    </>
  )
}

export default App
