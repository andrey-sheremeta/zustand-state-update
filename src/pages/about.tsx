import { useUiStore } from "@/store/uiStore";

export default function Home() {
    const pageName = useUiStore(s => s.pageName)
    console.log('> render about page', pageName);
  return (
      <div>
        <h1>{pageName}</h1>
      </div>
  )
}

export const getServerSideProps = () => {
    return {
        props: {
            pageName: 'About_page_name',
        }
    }
}
