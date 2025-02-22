import HelloWorld from "./components/HelloWorld";


export default function Home() {
  console.log("This is the home page");
  console.log("This is the home page from server");
  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        Sankar K G
      </h1>
      <HelloWorld />
    </div>
  ); 
}
