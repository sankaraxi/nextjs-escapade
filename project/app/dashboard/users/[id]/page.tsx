const page = ({params} : {params : {id: string}}) => {
    const {id} = params;
  return (
    <div>
        new user {id}
    </div>
  )
}

export default page