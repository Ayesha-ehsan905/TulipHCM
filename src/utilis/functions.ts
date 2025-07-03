type ScrollToElementFunction = (
  event: React.MouseEvent<HTMLSpanElement, MouseEvent>,
  targetId: string
) => void;
export const scrollToElement: ScrollToElementFunction = (event, targetId) => {
  event.preventDefault(); // Prevent default anchor behavior

  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop - 100,
      behavior: "smooth", // Enables smooth scrolling
    });
  }
};
