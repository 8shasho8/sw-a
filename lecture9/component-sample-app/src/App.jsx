import Header from './Header'
import Comment from './Comment'

function App() {
  return (
    <div>
      <Header firstName="Taro" lastName="Toyo" />
      <div>
        <Comment
          bgColor="lightsalmon"
          avatarUrl="https://loremflickr.com/cache/resized/65535_52947692803_fba3d9b388_q_100_80_nofilter.jpg"
          userName="ねこ"
          text="React頑張って!"
        />
        <Comment
          bgColor="khaki"
          avatarUrl="https://loremflickr.com/cache/resized/65535_53049747530_0c964b5139_q_100_80_g.jpg"
          userName="Kitty"
          text="いまどうしてる?"
        />
      </div>
    </div>
  )
}

export default App
