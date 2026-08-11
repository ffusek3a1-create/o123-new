type ObserverCallback = (entry: IntersectionObserverEntry) => void;

const callbacks = new WeakMap<Element, ObserverCallback>();

let observer: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined") {
    return null;
  }

  if (observer) {
    return observer;
  }

  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        callbacks.get(entry.target)?.(entry);
      }
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px",
    },
  );

  return observer;
}

export function observe(
  element: Element,
  callback: ObserverCallback,
): () => void {
  const sharedObserver = getObserver();

  if (!sharedObserver) {
    return () => undefined;
  }

  callbacks.set(element, callback);
  sharedObserver.observe(element);

  return () => {
    callbacks.delete(element);
    sharedObserver.unobserve(element);
  };
}