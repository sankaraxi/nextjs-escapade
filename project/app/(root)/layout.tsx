const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <h1>Root Header</h1>
        {children}
        <h1>Root Footer</h1>
    </div>
  )
}

export default layout