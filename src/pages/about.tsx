export default function Home() {
  return (
      <div>
        <h1>About page</h1>
      </div>
  )
}

export const getServerSideProps = () => {
    return {
        props: {
            pageName: 'About name',
        }
    }
}
