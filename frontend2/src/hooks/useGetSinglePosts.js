import Loader from "@/components/Loader";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const token = localStorage.getItem("accesstoken");
        const res = await axios.get(`https://hola-project.onrender.com/api/posts/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPost(res.data);
      } catch (error) {
        toast.error("Failed to load post");
      }
    };
    fetchPost();
  }, [id]);
};
