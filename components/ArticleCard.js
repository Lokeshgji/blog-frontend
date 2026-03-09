import React from 'react';

export default function ArticleCard({ article }) {
	return (
		<div>
			<h2>{article.title}</h2>
			<p>{article.content}</p>
		</div>
	);
}
