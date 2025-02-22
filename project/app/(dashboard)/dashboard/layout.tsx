const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <h1>Dashboard Layout</h1>
        {children}
        <h1>Dashboard Footer</h1>
    </div>
  )
}

export default layout