function Loading() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
      {/*/30 means we are giving opacity 30% */}
      <div className="loader"></div>
    </div>
  );
}

export default Loading;
