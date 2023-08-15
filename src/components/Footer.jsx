const Footer = ({ completedTasks, pendingTasks }) => {
  return (
    <footer className="flex flex-col justify-center items-center w-full">
      <p className="text-base font-medium text-neutral-950 dark:text-slate-100">
        CompletedTasks: {completedTasks}
      </p>
      <p className="text-base font-medium text-neutral-950 dark:text-slate-100">
        PendingTasks: {pendingTasks}
      </p>
    </footer>
  );
};
export default Footer;
