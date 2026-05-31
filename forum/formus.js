import { comments } from "../scripts/utils.js";

const hero = document.getElementById("hero");
const STORAGE_KEY = "simpsonsForumComments";

const getStoredComments = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const saveStoredComments = (storedComments) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storedComments));
};

const formatDate = (date) => {
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
};

const storedComments = getStoredComments();
const forumComments = [...comments, ...storedComments];

hero.innerHTML = `
	<section class="forumSection">
		<div class="forumHeader">
			<h1>The Simpsons' Forum</h1>
			<button id="openCommentDialogButton" type="button">New message</button>
		</div>
		<div class="commentsList"></div>
		<dialog id="newCommentDialog" class="newCommentDialog">
			<form id="newCommentForm" class="newCommentForm">
				<h3>New message</h3>
				<label>
					Name
					<input name="name" type="text" required maxlength="60" />
				</label>
				<label>
					Title
					<input name="title" type="text" required maxlength="120" />
				</label>
				<label>
					Message
					<textarea name="message" required rows="5" maxlength="600"></textarea>
				</label>
				<div class="dialogButtons">
					<button type="button" id="cancelCommentDialogButton">Cancel</button>
					<button type="submit">Post</button>
				</div>
			</form>
		</dialog>
	</section>
`;

const commentsList = document.querySelector(".commentsList");
const openCommentDialogButton = document.getElementById("openCommentDialogButton");
const cancelCommentDialogButton = document.getElementById("cancelCommentDialogButton");
const newCommentDialog = document.getElementById("newCommentDialog");
const newCommentForm = document.getElementById("newCommentForm");

const renderComments = () => {
  commentsList.innerHTML = forumComments
    .map(
      (comment) => `
			<article class="commentItem">
				<p class="commentMeta">${comment.name} - ${comment.date}</p>
				<h3>${comment.title}</h3>
				<p>${comment.message}</p>
			</article>
		`,
    )
    .join("");
};

openCommentDialogButton.addEventListener("click", () => {
  newCommentDialog.showModal();
});

cancelCommentDialogButton.addEventListener("click", () => {
  newCommentDialog.close();
});

newCommentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(newCommentForm);
  const newComment = {
    name: String(formData.get("name")).trim(),
    date: formatDate(new Date()),
    title: String(formData.get("title")).trim(),
    message: String(formData.get("message")).trim(),
  };

  if (!newComment.name || !newComment.title || !newComment.message) return;

  comments.push(newComment);
  forumComments.push(newComment);

  const updatedStoredComments = [...storedComments, newComment];
  storedComments.push(newComment);
  saveStoredComments(updatedStoredComments);

  renderComments();
  newCommentForm.reset();
  newCommentDialog.close();
});

renderComments();
