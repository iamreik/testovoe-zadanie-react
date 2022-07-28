import React, { useContext, useEffect, useState } from "react";
import "./hero.scss";
import TitleButton from "../TitleButton/TitleButton";
import Posts from "../Posts/Posts";
import PaginationBtn from "../PaginationBtn/PaginationBtn";
import { fetchPosts } from "../../api/postsAPI";
import Pages from "../Pages/Pages";
import PageContext from "../../context/pageContext";
import { observer } from "mobx-react-lite";

const Hero = observer(() => {
  const [posts, setPosts] = useState<any[]>([]);
  const { pages } = useContext(PageContext);
  const [postPerPage] = useState(10);
  const [isSortId, setIsSortId] = useState(false);
  const [isSortAlphabet, setIsSortAlphabet] = useState(false);
  const { search } = useContext(PageContext);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  const lastPostIndex = pages.page * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const maxPages = posts.length / postPerPage;

  const paginatePrev = () => {
    if (pages.page > 1) {
      pages.setPage(pages.page - 1);
    }
    return;
  };

  const paginateNext = () => {
    if (pages.page < maxPages) {
      pages.setPage(pages.page + 1);
    }
    return;
  };

  function sortId() {
    if (!isSortId) {
      setPosts(posts.sort((prev, next) => prev.id - next.id));
    } else {
      setPosts(posts.sort((prev, next) => next.id - prev.id));
    }
  }

  const filteredPosts = posts.filter((post) => {
    return (
      post.id
        .toString()
        .toLowerCase()
        .includes(search.searchValue.toString().toLowerCase()) ||
      post.title
        .toString()
        .toLowerCase()
        .includes(search.searchValue.toString().toLowerCase()) ||
      post.body
        .toString()
        .toLowerCase()
        .includes(search.searchValue.toString().toLowerCase())
    );
  });

  const currentPost = filteredPosts.slice(firstPostIndex, lastPostIndex);

  function sortAlphabet(props: string) {
    switch (props) {
      case "title":
        if (!isSortAlphabet) {
          setPosts(posts.sort((a, b) => (a.title > b.title ? 1 : -1)));
        } else {
          setPosts(posts.sort((a, b) => (a.title < b.title ? 1 : -1)));
        }

        break;
      case "body":
        if (!isSortAlphabet) {
          setPosts(posts.sort((a, b) => (a.body > b.body ? 1 : -1)));
        } else {
          setPosts(posts.sort((a, b) => (a.body < b.body ? 1 : -1)));
        }

        break;
      default:
        return;
    }
  }

  return (
    <section className="hero__container">
      <div className="hero__heading">
        <TitleButton
          name="ID"
          onClick={() => {
            setIsSortId(!isSortId);
            sortId();
          }}
        />
        <TitleButton
          name="Заголовок"
          onClick={() => {
            setIsSortAlphabet(!isSortAlphabet);
            sortAlphabet("title");
          }}
        />
        <TitleButton
          name="Описание"
          onClick={() => {
            setIsSortAlphabet(!isSortAlphabet);
            sortAlphabet("body");
          }}
        />
      </div>
      <div className="hero__content">
        {currentPost.map(
          (post: { title: string; id: number; body: string }) => {
            return (
              <Posts
                name={post.title}
                id={post.id}
                body={post.body}
                key={post.id}
              />
            );
          }
        )}
      </div>
      <div className="hero__pagination">
        <PaginationBtn name="Назад" onClick={paginatePrev} />
        <Pages
          postPerPage={postPerPage}
          totalPosts={posts.length}
          active={pages.page}
        />
        <PaginationBtn name="Вперед" onClick={paginateNext} />
      </div>
    </section>
  );
});

export default Hero;
