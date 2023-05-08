import axios from "axios"
import { useRouter } from "next/router"
import React from "react"
import { useUserHook } from "../../context/authContext"

const Callback = ({ query }: any) => {
  const { handleGoogle } = useUserHook()

  React.useEffect(() => {
    fetchData()
    // Client-side code to set data in localStorage
  }, [])
  const fetchData = () => {
    const changeQuery = new URLSearchParams(query).toString()
    axios
      .get(`https://api.hunterdox.com/api/auth/github/callback?${changeQuery}`)
      .then((res: any) => {
        if (res.status === 200) {
          handleGoogle(res)
        } else {
          throw new Error("Error occur")
        }
      })
  }
  return null
}

export async function getServerSideProps(context: any) {
  // Fetch data from external API
  const query = context.query
  // Pass data to the page via props
  return { props: { query } }
}

export default Callback
