export function getSelectedModel(): string {
  if (typeof window !== 'undefined') {
    const storedModel = localStorage.getItem('');
    return storedModel || 'ora:latest';
  } else {
    // Default model
    return 'ora:latest';
  }
}

//ora is based on Llama3.1:8b