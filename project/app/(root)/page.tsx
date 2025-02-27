import StartUpCard from "@/components/StartUpCard";
import SearchForm from "../../components/SearchForm";
import { AuthError } from "next-auth";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const params = await searchParams;
  const query = params?.query || ""; // Safely handle undefined values

  const posts = [
    {
      _createdAt: new Date(),
      _id: 1,
      views: 55,
      author: { _id: 1, name: "John Doe" },
      description: "A new way to connect with people",
      image:"https://plus.unsplash.com/premium_photo-1681562502996-bcfad45d4def?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cm9ib3RzfGVufDB8fDB8fHww",
      category:"Robots",
      title: "We Robots",
    },
  ]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your Venture, <br /> Connect with Capitalists
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {
            posts?.length > 0 ? (
              posts.map(
                (post: StartUpCardType ,index:number)=>(
                  <StartUpCard key={post?._id} post={post}/>
                )
              )
            ) : (
              <p className="no-results">No startups found</p>
            )
          }

        </ul>
      </section>
    </>
  );
}
