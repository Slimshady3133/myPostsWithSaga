export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const fetchPosts = () => ({
  type: FETCH_POSTS,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsError = (error) => ({
  type: FETCH_POSTS_ERROR,
  payload: error,
});

export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_ERROR = 'FETCH_USER_ERROR';

export const fetchUser = (userId) => ({
  type: FETCH_USER,
  payload: userId,
});

export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserError = (error) => ({
  type: FETCH_USER_ERROR,
  payload: error,
});

export const fetchCommentsRequest = (postId) => {
  return {
    type: FETCH_COMMENTS,
    payload: postId,
  };
};

export const fetchCommentsSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};

export const fetchCommentsFailure = (error) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: error,
  };
};
