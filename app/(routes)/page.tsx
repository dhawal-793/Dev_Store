import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import fetchBillboard from "@/actions/get-billboard";
import fetchProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

export const revalidate = 0;
export const dynamic = 'force-dynamic';

const Home = async () => {

  const featuredProducts = await fetchProducts({ isFeatured: true })
  const billboard = await fetchBillboard('4bac3797-456b-41ef-84e6-0d8a64093544');

  return (
    <Container>
      <div className="pb-10 space-y-10">
        <Billboard data={billboard} />
        <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={featuredProducts} />
        </div>
      </div>
    </Container>
  )
}

export default Home
