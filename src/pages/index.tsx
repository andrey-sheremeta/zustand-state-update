import {useUiStore} from "@/store/uiStore";

export default function Home() {
    const pageName = useUiStore(s => s.pageName)
    console.log(' > render home page', pageName);
  return (
      <div>
        <h1>Home page</h1>
      </div>
  )
}

export const getServerSideProps = () => {
    return {
        props: {
            pageName: 'Home_page_name',
        }
    }
}
