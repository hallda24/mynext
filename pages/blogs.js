import Link from "next/link";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <p>This blog #{id}</p>
    </>
  );
};
