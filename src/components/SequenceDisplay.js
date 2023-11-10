const SequenceDisplay = ({ values }) => (
  <div>
    <ol>
      {values.map((value) => (
        <li key={value}>{value}</li>
      ))}
    </ol>
  </div>
);

export default SequenceDisplay;
