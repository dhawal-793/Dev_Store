import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import fetchBillboard from "@/actions/get-billboard";

export const revalidate = 0;
export const dynamic = 'force-dynamic';

const Home = async () => {
  const billboard = await fetchBillboard('4bac3797-456b-41ef-84e6-0d8a64093544');

  return (
    <Container>
      <div className="pb-10 space-y-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  )
}

export default Home
