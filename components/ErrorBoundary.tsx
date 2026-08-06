"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Portfolio render error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="px-6 py-24 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-3">
            Something went wrong
          </p>
          <h2 className="font-serif text-2xl mb-4">This section didn&apos;t load.</h2>
          <button
            onClick={() => this.setState({ hasError: false })}
            className="font-sans text-sm underline underline-offset-4"
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
