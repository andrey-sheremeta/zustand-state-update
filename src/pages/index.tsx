export default function Home() {
  return (
      <div>
        <h1>Home page</h1>
      </div>
  )
}

export const getServerSideProps = () => {
    return {
        props: {
            pageName: 'Home page',
        }
    }
}
