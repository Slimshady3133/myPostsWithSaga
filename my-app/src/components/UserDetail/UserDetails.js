import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUser, fetchPosts } from '../../store/actions/actions';
import { Card, Button, Spinner } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function UserDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) =>
    state.users.find((user) => user.id === parseInt(id))
  );
  const posts = useSelector((state) =>
    state.posts.filter((post) => post.userId === Number(id))
  );

  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchUser(id));
    dispatch(fetchPosts());
  }, [dispatch, id]);

  if (loading) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>User not found</p>;
  }
  return (
    <div data-testid="user-details">
      <Card style={{ marginBottom: '10px' }}>
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          {posts.map((post) => (
            <Card key={post.id} className="mb-4">
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
              </Card.Body>
            </Card>
          ))}

          <LinkContainer to="/">
            <Button variant="primary">Go back</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserDetails;
