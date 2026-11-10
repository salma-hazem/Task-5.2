import DOMPurify from 'dompurify';

// Keep basic formatting while removing scripts and dangerous attributes.
export const sanitizeHtml = (dirty) =>
  DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: [
      'p', 'br', 'b', 'strong', 'i', 'em',
      'u', 'ul', 'ol', 'li', 'blockquote', 'a'
    ],
    ALLOWED_ATTR: ['href', 'title']
  });
