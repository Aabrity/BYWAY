import React, { useState, ReactNode } from 'react';

interface ExpandableSectionProps {
  buttonLabel: string;
  expandedContent: string | ReactNode;
}

const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  buttonLabel,
  expandedContent,
}) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!isExpanded);
  };

  const sanitizeHtml = (html: string) => {
    const allowedTags = ['p', 'strong', 'em', 'u', 'a', 'br', 'h1', 'h2', 'h3'];
    const doc = new DOMParser().parseFromString(html, 'text/html');

    doc.body.querySelectorAll('*').forEach((node) => {
      if (!allowedTags.includes(node.tagName.toLowerCase())) {
        const fragment = doc.createDocumentFragment();
        while (node.firstChild) {
          fragment.appendChild(node.firstChild);
        }
        node.parentNode.replaceChild(fragment, node);
      }
    });

    return doc.body.innerHTML;
  };

  const renderContent = (content: string | ReactNode) => {
    if (typeof content === 'string') {
      const sanitizedContent = sanitizeHtml(content);
      return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
    } else if (content && content instanceof Object && 'dangerouslySetInnerHTML' in content) {
      const sanitizedContent = sanitizeHtml(content.dangerouslySetInnerHTML.__html);
      return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
    } else {
      return <div>{content}</div>;
    }
  };

  return (
    <div>
      <div className="pt-2 rounded-lg pb-2">
        <button
          className="text-xl font-bold text-black"
          onClick={handleExpandClick}
        >
          {buttonLabel}
        </button>

        {isExpanded && <div className=" ">{renderContent(expandedContent)}</div>}
      </div>
      <hr className="border-black p-px2" />
    </div>
  );
};

export default ExpandableSection;
