import React from 'react';

interface BlogContainerProps {
  title: string | string[];
  publishedDate: string;
  imageSrc: string;
}

const BlogContainer: React.FC<BlogContainerProps> = ({
  title,
  publishedDate,
  imageSrc,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "460px",
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)",
        borderRadius: "10px",
        padding: "20px",
        overflow: "hidden",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        cursor: "pointer",
        boxSizing: "border-box",
        marginBottom: "30px",
      }}
    >
      <div className='mt-4 , mb-5'>
        <img
          src={imageSrc}
          alt={Array.isArray(title) ? title.join(' ') : title}
          style={{ width: '367px', height: '300px' }}
        />
      </div>
      <div>
        {Array.isArray(title) ? (
          title.map((t, index) => (
            <p
              key={index}
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                fontSize: "20px",
                fontFamily: "inherit",
                fontWeight: "bold",
                marginBottom: "-2px",
             
              }}
            >
              {t}
            </p>
          ))
        ) : (
          <p
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "20px",
              fontFamily: "inherit",
              fontWeight: "bold",
            }}
          >
            {title}
          </p>
        )}
        <small style={{ fontSize: "14px", fontFamily: "inherit", fontWeight: "500" }}>
          Post date: {new Date(publishedDate).toLocaleDateString()}
        </small>
      </div>

      
    </div>
  );
};

export default BlogContainer;
 