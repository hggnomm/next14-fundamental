import { Metadata } from "next";

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};
type Props = {
  params: {
    productId: string;
  };
};
export default function ProductDetail({ params }: Props) {
  return (
    <>
      <h1>Product Nam Dep Trai {params.productId}</h1>
    </>
  );
}
