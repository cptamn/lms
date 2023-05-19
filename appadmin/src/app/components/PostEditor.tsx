import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const PostEditor = () => {
  const [loaded, setLoaded] = React.useState(false);

  if (!loaded) {
    return <>Loading...</>;
  }
  return (
    <div className="App">
      <h2>Using CKEditor 5 build in React</h2>
    </div>
  );
};

export default PostEditor;
