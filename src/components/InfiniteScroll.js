import React, { useState, useEffect, useRef, useCallback } from 'react';

const InfiniteScroll = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const observer = useRef();

  const loadMoreItems = useCallback(async () => {
    setLoading(true);
    // Giả lập việc tải dữ liệu từ API
    const newItems = Array.from({ length: 10 }, (_, index) => `Item ${(page - 1) * 10 + index + 1}`);
    setItems((prevItems) => [...prevItems, ...newItems]);
    setLoading(false);
  }, [page]); // Thêm 'page' vào danh sách phụ thuộc

  useEffect(() => {
    loadMoreItems();
  }, [loadMoreItems]); // Thêm 'loadMoreItems' vào danh sách phụ thuộc

  const lastItemRef = (node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => {
          if (items.length === index + 1) {
            return (
              <li ref={lastItemRef} key={item}>
                {item}
              </li>
            );
          } else {
            return <li key={item}>{item}</li>;
          }
        })}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;