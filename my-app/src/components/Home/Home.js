import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Card, Button, Spinner } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css';
import {
  fetchCommentsRequest,
  fetchCommentsSuccess,
  fetchPosts,
} from '../../store/actions/actions';

function Home() {
  const dispatch = useDispatch();
  const usersById = useSelector((state) =>
    state.users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {})
  );

  const [showComments, setShowComments] = useState({});

  const handleCommentsClick = (event, postId) => {
    event.preventDefault();
    setShowComments((prevShowComments) => ({
      ...prevShowComments,
      [postId]: !prevShowComments[postId],
    }));

    if (!showComments[postId]) {
      dispatch(fetchCommentsRequest(postId));
    } else {
      dispatch(fetchCommentsSuccess([]));
    }
  };

  const posts = useSelector((state) => state.posts);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const getFLName = (name) => {
    const nameS = name.split(' ');
    const names2 = nameS.map((el) => el.slice(0, 1));
    return names2.join(' ').toUpperCase();
  };

  return (
    <div data-testid="home">
      {posts.map((post) => {
        const user = usersById[post.userId];
        const postComments = comments.filter(
          (comment) => comment.postId === post.id
        );

        return (
          <Card key={post.id} style={{ marginBottom: '10px' }}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              {user && (
                <LinkContainer to={`/users/${post.userId}`}>
                  <div className="avatar">{getFLName(user.name)}</div>
                </LinkContainer>
              )}

              <Button onClick={(event) => handleCommentsClick(event, post.id)}>
                Comments
              </Button>
              {showComments[post.id] && postComments && (
                <div>
                  {postComments.map((comment) => (
                    <Card key={comment.id} style={{ marginBottom: '10px' }}>
                      <Card.Body>
                        <Card.Title>{comment.email}</Card.Title>
                        <Card.Text>{comment.body}</Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              )}
              <LinkContainer to={`/users/${post.userId}`}>
                <Button variant="primary">Go to author</Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Home;
