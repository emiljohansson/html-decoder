import test from 'ava'
import decode from '.'

test(t => {
  const expected = '<span>Hello</span>'
  const actual = decode('&lt;span&gt;Hello&lt;/span&gt;')
  t.is(actual, expected)
})

test(t => {
  const expected = '<span class="hello" data-style=\'{"fill": ["#0000ff", "#ff0000"]}\' style="display: none;">Hello</span>'
  const actual = decode('&lt;span&nbsp;class=&quot;hello&quot;&nbsp;data-style=&apos;{&quot;fill&quot;:&nbsp;[&quot;#0000ff&quot;,&nbsp;&quot;#ff0000&quot;]}&apos;&nbsp;style=&quot;display:&nbsp;none;&quot;&gt;Hello&lt;/span&gt;')
  t.is(actual, expected)
})
