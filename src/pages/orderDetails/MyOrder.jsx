import React, { useEffect, useMemo, useState } from 'react'
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Datatable from '../../components/DataTable';

const MyOrder = () => {

    const user = useSelector(state=>{
        return state.auth
    })


   // const [allData,setAllData] = useState([])
    const [orderDetails,setOrderDetails] = useState([])
 

    
    
    // Sort the array based on the date property
    orderDetails && orderDetails.sort((a, b) => a.date - b.date).reverse();
    

    

useEffect(()=>{
 
  const db = getDatabase();
  const starCountRef = ref(db, `users/${user.userID}`);
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    const allData = Object.keys(data).map(ele=>({
      id:ele,
      ...data[ele]
    }))

    setOrderDetails(allData)
  });

},[])

const modifiedData  = orderDetails && orderDetails.map(ele=>{
  return {...ele, date : ele.date.slice(4,21), Items : ele.allItems.length, price: ele.price }
})


const data = useMemo(() => modifiedData, [])

const columns = [
  
  {
    header: 'Name',
    columns: [
      {
        header: 'First',
        accessorKey: 'first_name',
        footer: 'First name',
      },
      {
        header: 'Last',
        accessorKey: 'last_name',
        footer: 'Last name',
      },
    ],
  },
 
  {
    header: 'Email',
    accessorKey: 'email',
    footer: 'Email',
  },
  {
    header: 'Gender',
    accessorKey: 'gender',
    footer: 'Gender',
  },
  {
    header: 'Date of birth',
    accessorKey: 'dob',
    footer: 'Date of birth',
    cell: info =>
      DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
  },
]

const movieColumns = [
 
  {
    header: 'Name',
    accessorKey: 'username',
  },
  {
    header: 'Total Items',
    accessorKey: 'Items',
  },
  {
    header: 'Price',
    accessorKey: 'price',
  },
  {
    header: 'Date',
    accessorKey: 'date',
  },
  {
    header: 'Address',
    accessorKey: 'address',
  },
]



  
  return (
    <div>{
      (

        <Datatable data={modifiedData} columns={movieColumns} />
      )
      }
    </div>
  )
}

export default MyOrder