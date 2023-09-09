const Footer = ({ tasks, clearAllTasks }) => {
  return (
    <>
      <footer>
        <p>Your Tash {tasks.length} Added</p>
        <button
          title="Clear All Task"
          className={tasks.length ? "btn clearbtn_active" : "clearbtn btn"}
          onClick={clearAllTasks}
        >
          Clear All
        </button>
      </footer>
    </>
  );
};

export default Footer;
