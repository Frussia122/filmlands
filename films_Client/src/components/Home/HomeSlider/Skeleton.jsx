
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader 
      speed={2}
      width={267.081}
      height={379}
      viewBox="0 0 267.081 379"
      backgroundColor="#c8c0c0"
      foregroundColor="#fffafa"
      {...props}
    >
      <rect x="0" y="0" rx="20" ry="20" width="267.081" height="379" />
    </ContentLoader>
  )
  
  export default Skeleton;