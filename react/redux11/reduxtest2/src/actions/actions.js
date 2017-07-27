

export function addComment(comment){
  return {
    type: 'ADD_COMMENT',
    comment
  }
}

export function authorChange(author){
  return {
    type: 'AUTHOR_CHANGE',
    author
  }
}

export function textChange(text){
  return {
    type: 'TEXT_CHANGE',
    text
  }
}