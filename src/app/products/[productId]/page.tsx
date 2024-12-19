export default function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <>
      <h1>Product Nam Dep Trai {params.productId}</h1>
    </>
  );
}
